export class PostsObjects {
    public post_id: number;
    public body: string;
    public image: string;
    public video_url: string;
    public title: string;
    public username: string;
    public community: string;
    public subscribed: boolean;
    public author_photo_path: string;
    public down_votes: number;
    public up_votes: number;
    public date: string;
    public comments_num: number;
    public saved: boolean;
    public hidden: boolean;
    public up_voted: boolean;
    public down_voted: boolean;
    public post_link: string;

    constructor(pId: number, pBody: string, pImage: string, pVideoUrl: string, pTitle: string, pUsername: string, pCommunity: string,
                pSubscribed: boolean, pAuthorPhotoPath: string, pDownVotes: number, pUpVotes: number, pDate: string, pCommentsNum: number,
                pSaved: boolean, pHidden: boolean, pUpVoted: boolean, pDownVoted: boolean, pPostLink: string) {
            this.post_id = pId;
            this.body = pBody;
            this.image = pImage;
            this.video_url = pVideoUrl;
            this.title = pTitle;
            this.username = pUsername;
            this.community = pCommunity;
            this.subscribed = pSubscribed;
            this.author_photo_path = pAuthorPhotoPath;
            this.down_votes = pDownVotes;
            this.up_votes = pUpVotes;
            this.date = pDate;
            this.comments_num = pCommentsNum;
            this.saved = pSaved;
            this.hidden = pHidden;
            this.up_voted = pUpVoted;
            this.down_voted = pDownVoted;
            this.post_link = pPostLink;
        }
}
