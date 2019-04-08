export class PostsObjects {
    public post_id: number;
    public body: string;
    public video_url: string;
    public image: string;
    public title: string;
    public username: string;
    public community: string;
    public subscribed: boolean;
    public author_photo_path: string;
    public downvotes: number;
    public upvotes: number;
    public date: string;
    public comments_num: number;
    public saved: boolean;
    public hidden: boolean;
    public upvoted: boolean;
    public downvoted: boolean;
    public first_icon: string;
    public post_link: string;

    constructor(pId: number, pBody: string, pImage: string, pVideoUrl: string, pTitle: string, pUsername: string, pCommunity: string,
                pSubscribed: boolean, pAuthorPhotoPath: string, pDownVotes: number, pUpVotes: number, pDate: string, pCommentsNum: number,
                pSaved: boolean, pHidden: boolean, pUpVoted: boolean, pDownVoted: boolean, pFirstIcon: string, pPostLink: string) {
            this.post_id = pId;
            this.body = pBody;
            this.image = pImage;
            this.video_url = pVideoUrl;
            this.title = pTitle;
            this.username = pUsername;
            this.community = pCommunity;
            this.subscribed = pSubscribed;
            this.author_photo_path = pAuthorPhotoPath;
            this.downvotes = pDownVotes;
            this.upvotes = pUpVotes;
            this.date = pDate;
            this.comments_num = pCommentsNum;
            this.saved = pSaved;
            this.hidden = pHidden;
            this.upvoted = pUpVoted;
            this.downvoted = pDownVoted;
            this.first_icon = pFirstIcon;
            this.post_link = pPostLink;
        }

        OnclickUpVote() {
            if (this.upvoted === false) {
              this.upvotes = this.upvotes + 1;
              this.upvoted = true;
              } else {
              this.upvotes = this.upvotes - 1;
              this.upvoted = false;
              }
              }

              OnclickDownVote() {
                if (this.downvoted === false) {
                  this.downvotes = this.downvotes + 1;
                  this.downvoted = true;
                  } else {
                  this.downvotes = this.downvotes - 1;
                  this.downvoted = false;
                  }
                  }

                  hidePost() {
                    this.hidden = true;
                  }
}
