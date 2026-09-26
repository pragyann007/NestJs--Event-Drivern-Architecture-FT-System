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
                                            'data-bs-target="#controllers-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' : 'data-bs-target="#xs-controllers-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' :
                                            'id="xs-controllers-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' :
                                        'id="xs-injectables-links-module-AppModule-1cf8adc07c2388d8110019d798d4aa05df061c786d6e74cf54164d4128181c15d1568499668f22845a60aad4475af0d1b3ea01bf282937f9ffe7e93ef2d54c84"' }>
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
                                            'data-bs-target="#controllers-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' :
                                            'id="xs-controllers-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' :
                                        'id="xs-injectables-links-module-PostsModule-f7b12add9497ab3ac75d10e532144b21bee73a210097c1afeb3fffcaeedb8884a533e26763b3bab9d5c90c0c3ea610ed07c5e10d1de9d242120a6084609ebec0"' }>
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
                                <a href="modules/TemplatePlaygroundModule.html" data-type="entity-link" >TemplatePlaygroundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' : 'data-bs-target="#xs-components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' :
                                            'id="xs-components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                            <li class="link">
                                                <a href="components/TemplatePlaygroundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplatePlaygroundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' :
                                            'id="xs-controllers-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' :
                                        'id="xs-injectables-links-module-UsersModule-ea6cb44d41bb1491017a7d04a8d8be01f42cc6ffa1f51a074342a47124e7c1573f3da66c294269f16dfc972ff099026501030e1e9cad477f5a53d8ab7a82a024"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentProcesor.html" data-type="entity-link" >PaymentProcesor</a>
                            </li>
                            <li class="link">
                                <a href="classes/POSTDTO.html" data-type="entity-link" >POSTDTO</a>
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
