export class comments{
    comment_id: number;
    body: string;
    username: string;
    author_photo_path: string;
    downvotes: number;
    upvotes: number;
    date: string;
    comments_num: number;
    saved: boolean;
    upvoted: boolean;
    downvoted: boolean;
    constructor(comment_id: number, body: string, username: string, author_photo_path: string, downvotes: number,
        upvotes: number, date:  string, comments_num: number, saved: boolean, upvoted: boolean, downvoted: boolean){
            this.comment_id = comment_id;
            this.body = body;
            this.username = username;
            this.author_photo_path = author_photo_path;
            this.downvotes = downvotes;
            this.upvotes = upvotes;
            this.date =  date;
            this.comments_num = comments_num;
            this.saved = saved;
            this.upvoted = upvoted;
            this.downvoted = downvoted;
        }
}