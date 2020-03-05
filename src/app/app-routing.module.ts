import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this
import { PieChartComponent} from './pie-chart/pie-chart.component';
import {ChartComponent} from './chart/chart.component';
import { TeamComponent } from './team/team.component';
import {RosterComponent} from './roster/roster.component';
import {PlayerComponent} from './player/player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'list', component: ListComponent} ,    
  { path:'piechart', component: PieChartComponent},
  { path:'chart', component: ChartComponent}   ,       // Add this
  { path:'teams', component: TeamComponent} ,   // Add this
  { path:'roster', component: RosterComponent},
  { path:'player', component: PlayerComponent} ,
  { path:'addplayer/:id', component: AddplayerComponent}    // Add this
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
