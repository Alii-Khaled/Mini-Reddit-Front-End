        /**
         * this class is used for getting names and logos of communities that user subscribe
         */
export class UserCommunities {
        /**
         * to display community name
         */
    public community_name: string;
        /**
         * to display community logo
         */
    public community_logo: string;
    /**
     * constructor takes every value of the class and assign it to this community
     */
    constructor(name: string, logo: string) {
        this.community_logo = logo;
        this.community_name = name;
    }
}
