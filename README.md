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

- `[disabled]='変数名(boolean)'`で有効無効を切り替えることができる

- 子コンポーネントの<app-hogehoge #hoge>タグにローカル変数を持たせることができる。その変数を親コンポーネントで使える。例:`hoge.huga`みたいな感じで。
- 上記の方法だと、親子の結びつきが親のテンプレート内で完結する必要があり、制限されてしまう。親は子へのアクセスできない。
- 親子の結びつきが親テンプレート内で完結しない場合は、`ViewChild`を使うと良い。完結するなら上記方法で十分。

- `styles: [h3{color:#fff;}]`とコンポーネント内で指定することもできるが、scss を使いたいので`styleUrls: ['./missioncontrol.component.scss']`で scss を指定する方が良さそう。どちらの場合でもスタイルの適応範囲はコンポーネント内のみ。
