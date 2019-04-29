        /**
         * This class is used for getting names and logos of communities that user subscribe
         */
export class UserCommunities {
        /**
         * Id for community
         */
        public id;
        /**
         * To display community name
         */
    public name: string;
        /**
         * To display community logo
         */
    public logo: string;
    /**
     * Constructor takes every value of the class and assign it to this community
     */
    constructor(id: number, name: string, logo: string) {
        this.logo = logo;
        this.name = name;
        this.id = id;
    }
}
