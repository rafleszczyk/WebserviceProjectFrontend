import {Component, Input} from '@angular/core';
import {IComment} from '../../../assets/models/comment.interface';

@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.scss']
})
export class CommentsTableComponent {
  @Input() comments: IComment;
  @Input() color: string;
}
