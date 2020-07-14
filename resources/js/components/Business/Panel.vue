<template>
    <div class="d-flex flex-column flex-md-row">
        <div class="sidebar col-xs-12 col-md-3">
            <ul class="nav flex-column sticky-top">
                <li class="nav-item">
                    <router-link class="dashboard-link" :to="{name:'panel'}">
                        <i class="fal fa-tachometer-alt-fast fa-lg"/>
                        داشبورد
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dashboard-link" :to="{name:'new-ware'}">
                        <i class="fal fa-file-medical fa-lg"/>
                        کالای جدید
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dashboard-link" :to="{name:'wares'}">
                        <i class="fal fa-clipboard-list fa-lg"/>
                        کالاها
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dashboard-link" :to="{name:'category'}">
                        <i class="fas fa-th fa-lg"/>
                        دسته‌ها
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dashboard-link" :to="{name:'settings'}">
                        <i class="fal fa-cog fa-lg"/>
                        تنظیمات
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="panel-content col-xs-12 col-md-9 py-5 bg-white">
            <router-view name="panelContent" :key="this.$root.componentKey"/>
        </div>
    </div>
</template>

<script>
    export default {
        watch: {
            $route() {
                this.scrollToHeader()
            }
        }
    }
</script>
