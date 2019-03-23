export class Communities {
    public community_name: string;
    public community_logo: string;
    public community_banner: string;
    public community_description: string;
    public community_rules: string;
    constructor(name: string, logo: string,banner: string,description: string,rules: string) {
        this.community_logo = logo;
        this.community_name = name;
        this.community_banner = banner;
        this.community_description = description;
        this.community_rules = rules;
    }
}
