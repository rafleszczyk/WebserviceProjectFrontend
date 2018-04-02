import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  breadcrumb: string;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {
    this.runBuildBreadcrumb();
  }

  runBuildBreadcrumb() {
    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.breadcrumb = this.formatBreadcrumb(this.buildBreadcrumb([], this._activatedRoute.root));
        }
      });
  }

  buildBreadcrumb(breadcrumbArray: string[] = [], node: ActivatedRoute): string[] {
    if (node.snapshot.data && node.snapshot.data.breadcrumbName) {
      breadcrumbArray.push(node.snapshot.data.breadcrumbName);
    }
    return node.firstChild ? this.buildBreadcrumb(breadcrumbArray, node.firstChild) : breadcrumbArray;
  }

  formatBreadcrumb(breadcrumbArray: string[]): string {
    let breadcrumb: string = '';
    breadcrumbArray.forEach(name => breadcrumb = breadcrumb ? `${breadcrumb} / ${name}` : name);
    return breadcrumb;
  }
}
