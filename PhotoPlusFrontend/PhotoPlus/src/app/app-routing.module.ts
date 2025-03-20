import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { ForumComponent } from './components/forum/forum.component';
import { SectionBodyComponent } from './components/forum/section/body/section-body.component';
import { SectionEditComponent } from './components/forum/section/edit/section-edit.component';
import { SectionRemoveComponent } from './components/forum/section/remove/section-remove.component';
import { SectionAddComponent } from './components/forum/section/add/section-add.component';
import { TopicBodyComponent } from './components/forum/section/body/topic/body/topic-body.component';
import { TopicEditComponent } from './components/forum/section/body/topic/edit/topic-edit.component';
import { TopicRemoveComponent } from './components/forum/section/body/topic/remove/topic-remove.component';
import { TopicAddComponent } from './components/forum/section/body/topic/add/topic-add.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { SearchComponent } from './components/search/search.component';
import {UserShowOrdersComponent} from "./components/user-show-orders/user-show-orders.component";

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'registration', component: RegistrationComponent, title: 'Registration' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'cart', component: CartComponent, title: 'Shopping Cart' },
  { path: 'category', component: CategoryComponent, title: 'Categories' },
  { path: 'forum', component: ForumComponent, title: 'Forum' },
  { path: 'product/:productCode', component: ProductComponent, title: 'Product Details' },
  { path: 'order', component: OrderComponent, title: 'Order' },
  { path: 'forum/section/:sectionCode', component: SectionBodyComponent, title: 'Forum Section' },
  { path: 'forum/edit/section/:sectionCode', component: SectionEditComponent, title: 'Edit Section' },
  { path: 'forum/remove/section/:sectionCode', component: SectionRemoveComponent, title: 'Remove Section' },
  { path: 'forum/add/section', component: SectionAddComponent, title: 'Add Section' },
  { path: 'forum/topic/:topicCode', component: TopicBodyComponent, title: 'Forum Topic' },
  { path: 'forum/edit/topic/:topicCode', component: TopicEditComponent, title: 'Edit Topic' },
  { path: 'forum/remove/topic/:topicCode', component: TopicRemoveComponent, title: 'Remove Topic' },
  { path: 'forum/add/topic/:sectionCode', component: TopicAddComponent, title: 'Add Topic' },
  { path: 'manage', component: AdminPanelComponent, title: 'Admin Panel' },
  { path: 'manage/orders', component: AdminPanelComponent, title: 'Manage Orders' },
  { path: 'manage/orders/:orderCode', component: AdminPanelComponent, title: 'Order Details' },
  { path: 'manage/manageProducts', component: AdminPanelComponent, title: 'Manage Products' },
  { path: 'manage/delivery', component: AdminPanelComponent, title: 'Manage Delivery' },
  { path: 'manage/changePrivileges', component: AdminPanelComponent, title: 'Change Privileges' },
  { path: 'manage/deleteUser', component: AdminPanelComponent, title: 'Delete User' },
  { path: 'manage/generateReports', component: AdminPanelComponent, title: 'Generate Reports' },
  { path: 'imageDisplay/:imageCode', component: ImageDisplayComponent, title: 'Image Display' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'user/details', component: UserDetailsComponent, title: 'User Details' },
  { path: 'search/:searchedText', component: SearchComponent, title: 'Search Results' },
  { path: 'user/orders', component: UserShowOrdersComponent, title: 'My Orders' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
