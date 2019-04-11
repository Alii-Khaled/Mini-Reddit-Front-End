export class comments {
    public comment_id: number;
    public body: string;
    public username: string;
    public downvotes: number;
    public upvotes: number;
    public date: string;
    public comments_num: number;    // what is this???
    public saved: boolean;
    // is there any boolean for saved or up and down votes???

    constructor(_comment_id: number, _body: string, _username: string, _downvotes: number, _upvotes: number,
         _date: string, _comments_num: number, _saved: boolean) {
             this.comment_id = _comment_id;
             this.body = _body;
             this.username = _username;
             this.downvotes = _downvotes;
             this.upvotes = _upvotes;
             this.date = _date;
             this.comments_num = _comments_num;
             this.saved = _saved;
         }
}