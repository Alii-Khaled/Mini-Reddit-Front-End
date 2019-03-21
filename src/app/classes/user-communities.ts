export class UserCommunities {
    public community_name: string;
    public community_logo: string;
    constructor(name: string, logo: string) {
        this.community_logo = logo;
        this.community_name = name;
    }
}
