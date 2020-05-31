import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/models/character.model';
import { Story } from 'src/app/shared/models/story.model';
import { StoryService } from 'src/app/shared/services/story.service';

import { Option } from 'src/app/shared/models/option.model';
import { ProgressService } from 'src/app/shared/services/progress.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Progress } from 'src/app/shared/models/progress.model';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  tempOptions: Option[];

  members: {[name: string]: Character};
  story: Story;
  progress: Progress;

  constructor(private route: ActivatedRoute,
    public storyService: StoryService) { }

  ngOnInit(): void {
    this.tempOptions = [
      {
        label: 'option 1',
        child: 'child',
        value: null
      },
      {
        label: 'option 2',
        child: 'child',
        value: null
      },
      {
        label: 'option 3',
        child: 'child',
        value: null
      },
      {
        label: 'option 4',
        child: 'child',
        value: null
      },
    ];

    const storyId = this.route.snapshot.params.id;

    this.storyService.getStory(storyId).subscribe(story => {
      this.story = story;
      for (const key in this.story.events) {
        if (this.story.events[key].timestamp && !this.story.events[key].timestamp.includes('PM') && !this.story.events[key].timestamp.includes('AM')) {
          let hours = Number(this.story.events[key].timestamp.substring(0 , 2));
          const minutes = this.story.events[key].timestamp.substring(3 , 5);
          if (hours > 12) {
            hours = hours - 12;
            this.story.events[key].timestamp = `${hours}:${minutes} PM`;
          } else {
            this.story.events[key].timestamp = `${hours}:${minutes} AM`;
          }
        }
      }
      this.members = story.characters;
    });

    if (storyId) {
      this.storyService.openStory(storyId);
    }
  }

  updateMembers(members: {[name: string]: Character}) {
    this.members = {...members};
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(_event) {
    // TODO: Save progress.
    this.storyService.openStory(null);
  }

}
