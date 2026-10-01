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
                    <a href="index.html" data-type="index-link">nestjs-event-driven-architecture documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
    <button type="button"
        class="search-input-clear"
        aria-label="Clear search"
        data-search-input-clear>&times;</button>
</div>
` : '' }
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
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="architecture.html" data-type="chapter-link">
                                        <span class="icon ion-ios-git-branch"></span>Architecture
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' :
                                            'id="xs-controllers-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' :
                                        'id="xs-injectables-links-module-AppModule-2cdce5f5824678c78214abe91ea7a8fdc70577e5089c0b103de289db70ed4c8d3937225cc5b0140dc7ff31937c328c9ac56830463a4a3c54c22df83c5f3e2f60"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuditModule.html" data-type="entity-link" >AuditModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuditModule-e764461b82da264616185843ab8426ad8aa0e922af8d82100e1f5641ac2c07022e70b26e35f2690f535369c2ff3ef05c71b61a74d399a9f4e1fa47e319fe6e3e"' : 'data-bs-target="#xs-injectables-links-module-AuditModule-e764461b82da264616185843ab8426ad8aa0e922af8d82100e1f5641ac2c07022e70b26e35f2690f535369c2ff3ef05c71b61a74d399a9f4e1fa47e319fe6e3e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuditModule-e764461b82da264616185843ab8426ad8aa0e922af8d82100e1f5641ac2c07022e70b26e35f2690f535369c2ff3ef05c71b61a74d399a9f4e1fa47e319fe6e3e"' :
                                        'id="xs-injectables-links-module-AuditModule-e764461b82da264616185843ab8426ad8aa0e922af8d82100e1f5641ac2c07022e70b26e35f2690f535369c2ff3ef05c71b61a74d399a9f4e1fa47e319fe6e3e"' }>
                                        <li class="link">
                                            <a href="injectables/AuditListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditListener</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryModule.html" data-type="entity-link" >InventoryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-7818c7fed37b48d56dc2223dadead5d9c4d3591bfd7ed6647fd57065e16acc8a632b98c2aa451ea17348ae8fa7f8f2aaf804848d2b67d2a62e996dec7caeb534"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotifcationModule.html" data-type="entity-link" >NotifcationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' : 'data-bs-target="#xs-controllers-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' :
                                            'id="xs-controllers-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' : 'data-bs-target="#xs-injectables-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' :
                                        'id="xs-injectables-links-module-OrderModule-4d7e38cc0565d34703a9c0a593473f4ae9f6bd5222fe525a95f4c29a3e94f35b9969de8de1c506fcb05b8413cc737fb93bce676b15c9a017e78322ff4a680873"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-d1e14f0b13918a2d944ba057478599767e613e6e2a0966cef84289edf8c3feede67d957784fc11e4cebe8af9edf25c77e1270c3411011cb523dbd23d3b799ef8"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-d1e14f0b13918a2d944ba057478599767e613e6e2a0966cef84289edf8c3feede67d957784fc11e4cebe8af9edf25c77e1270c3411011cb523dbd23d3b799ef8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-d1e14f0b13918a2d944ba057478599767e613e6e2a0966cef84289edf8c3feede67d957784fc11e4cebe8af9edf25c77e1270c3411011cb523dbd23d3b799ef8"' :
                                        'id="xs-injectables-links-module-PaginationModule-d1e14f0b13918a2d944ba057478599767e613e6e2a0966cef84289edf8c3feede67d957784fc11e4cebe8af9edf25c77e1270c3411011cb523dbd23d3b799ef8"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentModule-6839930c7092c2ed7daa103b4bf2bd7c5f742621c5593ca50d6f58862c36e63d3891add6bc39496c830a8a01da802470b88e840626da97a7e36f5cdb71ecb4a6"' : 'data-bs-target="#xs-injectables-links-module-PaymentModule-6839930c7092c2ed7daa103b4bf2bd7c5f742621c5593ca50d6f58862c36e63d3891add6bc39496c830a8a01da802470b88e840626da97a7e36f5cdb71ecb4a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-6839930c7092c2ed7daa103b4bf2bd7c5f742621c5593ca50d6f58862c36e63d3891add6bc39496c830a8a01da802470b88e840626da97a7e36f5cdb71ecb4a6"' :
                                        'id="xs-injectables-links-module-PaymentModule-6839930c7092c2ed7daa103b4bf2bd7c5f742621c5593ca50d6f58862c36e63d3891add6bc39496c830a8a01da802470b88e840626da97a7e36f5cdb71ecb4a6"' }>
                                        <li class="link">
                                            <a href="injectables/IdempotencyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdempotencyService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' :
                                            'id="xs-controllers-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' :
                                        'id="xs-injectables-links-module-PostsModule-ef9be161ce584a4c2858e60beaf1dc6617ff0323c582b5359bb1e41e116083294e198a7cd4901e3a4d812de22e052d2370c8cf9bdc1a89fe8b29ed5d77c27fb9"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QueueModules.html" data-type="entity-link" >QueueModules</a>
                            </li>
                            <li class="link">
                                <a href="modules/RedisModule.html" data-type="entity-link" >RedisModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' :
                                            'id="xs-controllers-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' :
                                        'id="xs-injectables-links-module-TagsModule-002fd5552204a0c718aad432543d04cea8f3182e548aa8b71d37c77b85784f935639cc42253763683614b85b01a940afc5bdf77570fa93e78ed7d06cdabaddf0"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatePlaygroundModule.html" data-type="entity-link" >TemplatePlaygroundModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' : 'data-bs-target="#xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' :
                                        'id="xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <li class="link">
                                            <a href="injectables/HbsRenderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HbsRenderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TemplateEditorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateEditorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ZipExportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZipExportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' :
                                            'id="xs-controllers-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' :
                                        'id="xs-injectables-links-module-UsersModule-684a1280cfef8b85bbd43d0c2a815261e05ab934ef7438303be0f49341c550e9833e66f8427f3fce268e3b1a67f405afc23449d615a73b1782c7aaa347843fc9"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDTO.html" data-type="entity-link" >CreateOrderDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBasePost.html" data-type="entity-link" >GetBasePost</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostDTO.html" data-type="entity-link" >GetPostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/InventoryProcessor.html" data-type="entity-link" >InventoryProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/MetaOptionsDTO.html" data-type="entity-link" >MetaOptionsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notificationprocessor.html" data-type="entity-link" >Notificationprocessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderItemDTO.html" data-type="entity-link" >OrderItemDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDTO.html" data-type="entity-link" >PaginationQueryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentProcesor.html" data-type="entity-link" >PaymentProcesor</a>
                            </li>
                            <li class="link">
                                <a href="classes/POSTDTO.html" data-type="entity-link" >POSTDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagDTO.html" data-type="entity-link" >TagDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/InventoryListener.html" data-type="entity-link" >InventoryListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationListener.html" data-type="entity-link" >NotificationListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderCreatedEvent.html" data-type="entity-link" >OrderCreatedEvent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueueServices.html" data-type="entity-link" >QueueServices</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuditlogEntry.html" data-type="entity-link" >AuditlogEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChargeRecord.html" data-type="entity-link" >ChargeRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompoDocConfig.html" data-type="entity-link" >CompoDocConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaginate.html" data-type="entity-link" >IPaginate&lt;T&gt;</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template.html" data-type="entity-link" >Template</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
