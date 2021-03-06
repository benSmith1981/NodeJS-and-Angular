import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {


} else {
/*
	this.meta.addTags([
      {name: 'description', content: 'How to use Angular 4 meta service'},
      {name: 'author', content: 'talkingdotnet'},
      {name: 'keywords', content: 'Angular, Meta Service'}
    ]);
    
   const meta = document.createElement('meta');
   meta.name = 'description';
   meta.content = 'talkingdotnet';
   document.head.appendChild(meta);
   */
} 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
