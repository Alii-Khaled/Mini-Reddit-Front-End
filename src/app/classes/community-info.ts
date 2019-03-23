/**
 * this class to store Communities info
 */
export class Communities {
 /**
     * name of this community
     */
    public community_name: string;
    /**
     * logo of this community
     */
    public community_logo: string;
    /**
     * banner of this community
     */
    public community_banner: string;
    /**
     * description of this community
     */
    public community_description: string;
    /**
     * rules of this community
     */
    public community_rules: string;

       /**
     * constructor takes every value of the class and assign it to this community
     */
    constructor(name: string, logo: string,banner: string,description: string,rules: string) {
        this.community_logo = logo;
        this.community_name = name;
        this.community_banner = banner;
        this.community_description = description;
        this.community_rules = rules;
    }
}
