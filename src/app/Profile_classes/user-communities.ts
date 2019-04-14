        /**
         * This class is used for getting names and logos of communities that user subscribe
         */
export class UserCommunities {
        /**
         * To display community number
         */
        public community_id: number;
        /**
         * To display community name
         */
    public community_name: string;
        /**
         * To display community logo
         */
    public community_logo: string;
    /**
     * Constructor takes every value of the class and assign it to this community
     */
    constructor(id:number,name: string, logo: string) {
        this.community_id   = id;
        this.community_logo = logo;
        this.community_name = name;
    }
}
