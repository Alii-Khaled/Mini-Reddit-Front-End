        /**
         * This class is used for getting names and logos of communities that user subscribe
         */
export class UserCommunities {
        /**
         * Id for community
         */
        public community_id;
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
    constructor(id: number, name: string, logo: string) {
        this.community_logo = logo;
        this.community_name = name;
        this.community_id = id;
    }
}
