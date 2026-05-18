import { Component, signal } from '@angular/core';
import { TheoryChapter } from './theory-chapter/theory-chapter';
import { VideoChapter } from './video-chapter/video-chapter';
import { InteractiveSessionChapter } from './interactive-session-chapter/interactive-session-chapter';
import { VrSimulationChapter } from './vr-simulation-chapter/vr-simulation-chapter';
import { NotesDialog } from '../course-detail/notes-dialog/notes-dialog';

@Component({
  selector: 'app-chapter-details',
  imports: [TheoryChapter, VideoChapter , InteractiveSessionChapter, VrSimulationChapter, NotesDialog],
  templateUrl: './chapter-details.html',
  styleUrl: './chapter-details.scss',
})
export class ChapterDetails {
  currentChapter = signal(1);
  showNotes = false;
}
