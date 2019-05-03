import { post, comments } from './comments';


export class c {
    post: post;
    comments: comments[];
    constructor(_post: any, _comments: any[]) {
        this.post = _post;
        this.comments = _comments;
    }
}