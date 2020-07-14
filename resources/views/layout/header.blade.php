<header class="w-100">
    <nav class="navbar navbar-expand navbar-dark bg-dark mx-auto" id="topNavbar">
        <button class="navbar-toggler d-block" type="button" data-toggle="collapse2"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                @if(auth()->check())
                    <li class="nav-item">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-light rounded-pill px-3 dropdown-toggle"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ user()->name() }}
                            </button>
                            <div class="dropdown-menu">
                                @if(isBusiness())
                                    <a class="dropdown-item" href="/panel">
                                        <i class="fal fa-user-tie fa-lg"></i>
                                        پنل شغلی
                                    </a>
                                    <div class="dropdown-divider"></div>
                                @endif
                                <a class="dropdown-item" href="/profile">
                                    <i class="fal fa-id-card fa-lg"></i>
                                    ویرایش اطلاعات شخصی
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/password">
                                    <i class="fal fa-key fa-lg"></i>
                                    رمز عبور
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/logout">
                                    <i class="fal fa-sign-out-alt fa-lg"></i>
                                    خروج
                                </a>
                            </div>
                        </div>
                    </li>
                @else
                    <li class="nav-item">
                        <button class="btn btn-sm btn-outline-light rounded-pill px-3" data-toggle="modal"
                           data-target="#loginModal">
                            <i class="fas fa-user"></i> ورود
                        </button>
                    </li>
                @endif
            </ul>
        </div>

        <a class="navbar-brand d-none d-sm-block" href="/">
            کودیره
            <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30"
                 class="d-inline-block align-top" alt="">
        </a>
    </nav>
</header>


@if(!auth()->check())
    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalTitle"
         aria-hidden="true" data-target>
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div id="app" class="w-100">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
@endif
