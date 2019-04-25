export class singlePost{
    post_id: number;
    body: string;
    image: string;
    title: string;
    username: string;
    community: string;
    photo_path: string;
    downvotes: number;
    upvotes: number;
    date:  string;
    comments_num: number;
    saved: boolean
    hidden: boolean;
    upvoted: boolean;
    downvoted: boolean;

    constructor(_post_id: number, _body: string, _image: string, _title: string, _username: string, _community: string, 
        _photo_path: string, _downvotes: number, _upvotes: number, _date: string, _comments_num: number, _saved: boolean,
        _hidden: boolean, _upvoted: boolean, _downvoted: boolean) {
            this.post_id = _post_id;
            this.body = _body;
            this.image = _image;
            this.title = _title;
            this.username = _username;
            this.community = _community;
            this.photo_path = _photo_path;
            this.downvotes = _downvotes;
            this.upvotes = _upvotes;
            this.date = _date;
            this.comments_num = _comments_num;
            this.saved = _saved;
            this.hidden = _hidden;
            this.upvoted = _upvoted;
            this.downvoted = _downvoted;
        }
}