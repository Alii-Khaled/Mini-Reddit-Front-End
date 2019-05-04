'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">reddit documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e256cd7b1a33c1e21f6ab702a0a0736d"' : 'data-target="#xs-components-links-module-AppModule-e256cd7b1a33c1e21f6ab702a0a0736d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e256cd7b1a33c1e21f6ab702a0a0736d"' :
                                            'id="xs-components-links-module-AppModule-e256cd7b1a33c1e21f6ab702a0a0736d"' }>
                                            <li class="link">
                                                <a href="components/AccountSettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentsLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentsLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommunityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommunityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommunityModeratorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommunityModeratorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateCommunityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateCommunityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatePostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeactivateAccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeactivateAccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownvotedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DownvotedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCommunityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditCommunityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotUsernameComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotUsernameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HiddenComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HiddenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomepageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomepageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NextPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NextPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileSettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SavedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpvotedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpvotedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserSettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewSinglePostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewSinglePostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/comments.html" data-type="entity-link">comments</a>
                            </li>
                            <li class="link">
                                <a href="classes/Communities.html" data-type="entity-link">Communities</a>
                            </li>
                            <li class="link">
                                <a href="classes/communityModerators.html" data-type="entity-link">communityModerators</a>
                            </li>
                            <li class="link">
                                <a href="classes/post.html" data-type="entity-link">post</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostsObjects.html" data-type="entity-link">PostsObjects</a>
                            </li>
                            <li class="link">
                                <a href="classes/singlePost.html" data-type="entity-link">singlePost</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCommunities.html" data-type="entity-link">UserCommunities</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPublicInfo.html" data-type="entity-link">UserPublicInfo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/communityHttpService.html" data-type="entity-link">communityHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DropdownService.html" data-type="entity-link">DropdownService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link">PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileHttpService.html" data-type="entity-link">ProfileHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewSinglePostService.html" data-type="entity-link">ViewSinglePostService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});