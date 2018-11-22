## Frontend Starter

### Cara pakai
( File Preparation : Cuma perlu 1 orang untuk melakukan ini )
1. Clone / Download as Zip repo ini
2. Setelah di Download, Copy semua "isinya"
3. Paste di Folder project kalian
4. Install dependencies / package yang diperlukan oleh starter ini
	 menggunakan `npm install`
5. Setelah selesai tinggal push ke git masing - masing.

( Team Member )
1. Clone repo project kalian
2. run ``npm install``
3. Lanjut ke running

### Running
Cara run starter ini :
```    npm run start ```
>- Secara otomatis akan membuat server di [http://localhost:8080/](http://localhost:8080/).
>- Jika ada file yang kalian ganti dan di save, server akan secara otomatis ter-reload
> dan webpack akan ngebundling file kalian
>- File - file yang perlu diganti hanya di folder src

### Struktur folder
```
project
│   README.md
│   package.json    
│   package-lock.json
|   README.md
|   stylelint.config.js
|   webpack.config.js
|   .babel.rc
|   .eslint.rc
|   .editorconfig
|   .gitignore
|   .postcss.config.js
|   .prettier.config.js
└───src
│   │  index.html
│   │  about.html
|   |  index.js
│   └───scss
|       └───base
|           |   _variable.scss   
│       └───components   
│           │   _button.scss
│       └───layout
|           |   _grid.scss
|       └───pages
|           |   _landing.scss
|           |   _about.scss
```
### Tambah Package / Library
1. Tambah package untuk development ( tidak diperlukan untuk production )
```
    npm install <nama package> --save-dev
 ```
2. Tambah package library untuk assets ( diperlukan untuk production )
```
    npm i <nama package> --save
```
> Jangan run ``npm install`` menggunakan sudo (``sudo npm install``)  jika hanya untuk menginstall package per project ( menghindari error EPERM : Permissions Denied )