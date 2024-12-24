import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { LoginSingupPageComponent } from './pages/login-singup-page/login-singup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PaperPathComponent } from './pages/profile-page/paper-path/paper-path.component';
import { SpeedTrackComponent } from './pages/profile-page/speed-track/speed-track.component';
import { QuizComponent } from './pages/profile-page/quiz/quiz.component';
import { ProfileSettingsComponent } from './pages/profile-page/profile-settings/profile-settings.component';
import { PastPapersPageComponent } from './pages/past-papers-page/past-papers-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },

    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'papers',
        component: PastPapersPageComponent
    },

    {
        path: 'about-us',
        component: AboutUsPageComponent
    },

    {
        path: 'login',
        component: LoginSingupPageComponent
    },

    {
        path: 'signup',
        component: LoginSingupPageComponent
    },

    {
        path: 'profile',
        component: ProfilePageComponent,
    children: [
            {
                path: 'paper-path',
                component: PaperPathComponent
            },
            {
                path: 'speed-track',
                component: SpeedTrackComponent
            },
            {
                path: 'quiz',
                component: QuizComponent
            },
            {
                path: 'settings',
                component: ProfileSettingsComponent
            }
        ]
    },
    { path: '**', redirectTo: 'profile/paper-path' },
    { path: '**', redirectTo:'profile/speed-track'},
    { path: '**', redirectTo:'profile/quiz'},
    { path: '**', redirectTo:'profile/settings'}

];
