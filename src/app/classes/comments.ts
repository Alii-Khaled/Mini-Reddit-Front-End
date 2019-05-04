
export class post {
    public body: string;
    public title: string;
    public author_username: string;
    public community: string;
    public community_id: number;
    constructor(_body: string, _title: string, _author_username: string, _community: string, _community_id: number) {
        this.body = _body;
        this.title = _title;
        this.author_username = _author_username;
        this.community = _community;
        this.community_id = _community_id;
    }
}
export class comments {
    public comment_id: number;
    public body: string;
    public downvotes: number;
    public upvotes: number;
    public duration: number;
    public link_date: string;
    public upvoted: boolean;    // what is this???
    public downvoted: boolean;
    // is there any boolean for downvoted or up and down votes???

    constructor(_comment_id: number, _body: string, _downvotes: number, _upvotes: number,
        link_date: string, _upvoted: boolean, _downvoted: boolean ,duration: number) {
             this.comment_id = _comment_id;
             this.body = _body;
             this.downvotes = _downvotes;
             this.upvotes = _upvotes;
             this.link_date = link_date;
             this.upvoted = _upvoted;
             this.downvoted = _downvoted;
             this.duration = duration;
         }
}
