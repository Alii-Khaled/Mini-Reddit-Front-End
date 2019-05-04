/**
 * this class to store Communities info
 */
export class Communities {
    /**
     * name of this community
     */
    public name: string;
    /**
     * logo of this community
     */
    public logo: string;
    /**
     * banner of this community
     */
    public banner: string;
    /**
     * description of this community
     */
    public desription: string;
    /**
     * rules of this community
     */
    public rules: string;
    /**
     * number of subscribers of this community
     */
    public num_subscribes: number;
    /**
   * boolean to know whether this user is subscribed or not
   */
    public subscribed: boolean;
    /**
* boolean to know whether this user is moderator or not
*/
    public moderator: boolean;
    /**
     * constructor takes every value of the class and assign it to this community
     */
    constructor(name: string, logo: string, banner: string, description: string, rules: string, subscribers: number, sub: boolean, mod: boolean) {
        this.logo = logo;
        this.name = name;
        this.banner = banner;
        this.desription = description;
        this.rules = rules;
        this.num_subscribes = subscribers;
        this.subscribed = sub;
        this.moderator = mod;
    }
}
