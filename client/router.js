import Vue    from 'vue';
import Router from 'vue-router';

import Home        from '@/pages/Home/Home.vue';
import PageDetail  from '@/pages/PageDetail/PageDetail.vue';
import Reviews     from '@/pages/Reviews/Reviews.vue';
import Sizes       from '@/pages/Sizes/Sizes.vue';

// Profile
import ProfileWrap         from '@/pages/Profile/Profile.vue';
import Profile             from '@/pages/Profile/Profile/Profile.vue';
import ProfileData         from '@/pages/Profile/Profile/ProfileData/ProfileData.vue';
import ProfileForm         from '@/pages/Profile/ProfileForm/ProfileForm.vue';
import ProfilePasswordForm from '@/pages/Profile/PasswordForm/PasswordForm.vue';
import ProfileOrders       from '@/pages/Profile/Profile/Orders/Orders.vue';

// Products
import Products      from '@/pages/Products/Products.vue';
import ProductDetail from '@/pages/Products/ProductDetail/ProductDetail.vue';

// Uniform builder
import UniformBuilder from '@/pages/UniformBuilder/UniformBuilder.vue';

// Cart
import Cart from '@/pages/Cart/Cart.vue';

// Checkout
import Checkout from '@/pages/Checkout/Checkout.vue';

Vue.use(Router);

const createRouter = () => new Router({
    mode: 'history',
    routes: [

        // General
        { path: '/', component: Home },
        { path: '/sizes', name: 'sizes.index', component: Sizes },
        { path: '/reviews', name: 'reviews.index', component: Reviews },

        // Auth
        { path: '/password/reset', name: 'password.reset', component: Reviews },

        // Profile
        { path: '/profile', component: ProfileWrap, children: [
            { path: '', component: Profile, children: [
                { path: '', name: 'profile.index', component: ProfileData },
                { path: 'edit', name: 'profile.edit', component: ProfileForm },
                { path: 'password/edit', name: 'profile.password.edit', component: ProfilePasswordForm },
                { path: 'orders', name: 'profile.orders.index', component: ProfileOrders }
            ] }
        ] },

        // Products
        { path: '/products/:category_slug?', name: 'products.index', component: Products },
        { path: '/products/:category_slug/:slug', name: 'products.view', component: ProductDetail },

        // Uniform builder
        { path: '/uniform-builder', name: 'uniform-builder.index', component: UniformBuilder },

        // Cart
        { path: '/cart', name: 'cart.index', component: Cart },

        // Checkout
        { path: '/checkout', name: 'checkout.index', component: Checkout },

        // Pages
        { path: '/:slug', name: 'pages.view', component: PageDetail }
    ]
});

export { createRouter };
