# angular 公式ドキュメント練習(コンポーネント＆テンプレート)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## memo

- 大きいコンポーネント(ある程度まとまったもの)は html ファイルでテンプレートを定義する。templateUrl プロパティに html を記述する。
- 小さいコンポーネントは template プロパティ内に記述する。

- 別ディレクトリのモジュールを読み込むときは app.modules.ts に import&declarations に記述したら使える
- EventEmitter で実行後に値を反映させることができる。(sizer.component.ts を参照)
- (keyup)をつけるだけで keyup イベントを付与できる。特に ts で処理書かなくても、input に入れた値を view に表示させることができる。`例)<input #id (keyup)="0"><p>{{id.value}}</p>`

- @Input()でデータのバケツリレー。(ちょっと面倒)
