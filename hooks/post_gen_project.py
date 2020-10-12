import subprocess

print("no script yet")

dev_modules = ['webpack-dev-server', 'webpack', 'webpack-cli@3', 'html-webpack-plugin', 'style-loader', 'sass-loader', 'css-loader', 'node-sass']
modules = ['react', 'react-dom']

if '{{ cookiecutter.use_typescript }}'.lower()[0] == 'y':
    dev_modules += ['ts-loader', 'typescript', '@types/react']

if '{{ cookiecutter.use_mobx }}'.lower()[0] == 'y':
    modules += ['mobx', 'mobx-react']

subprocess.run(['npm', 'i', '--save-dev'] + dev_modules)
subprocess.run(['npm', 'i', '--save'] + modules)
