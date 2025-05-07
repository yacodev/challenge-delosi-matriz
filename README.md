
# CSTI - DELOSI  - challenge

En este repositorio se utiliza el stack de [Next.js](https://nextjs.org)  + TypeScript  para desarrollar el reto frontend de la empresa DELOSI.

Herramientas externas que se utilizaron:
- Sass y clsx para manejar los estilos.


Puedes acceder al link desplegado en: https://challenge-indra-rimac.vercel.app


## Explicación de la App
Obejtivo: Es una aplicación web donde  se puede ingresar una matriz de NxN, el usuario  puede incrementar o disminuir N, finalmente como resultado se devolvera la misma matriz pero rotada en sentido anti-horario.

1. En la vista, el usuario puede crear la Matriz N x N , incrementando o disminuyendo el valor de N, y ingresando los valores de la matriz.
2. Al presionar el boton `Rotar matriz`, la aplicación devolvera la misma matriz girada 90 grados en sentido anti-horario.



## Estructura del repositorio

This repository has the following  organization:

    ├── src                     # React - app
        ├── components
            ├── Button             # Component
            ├── SquareInput           # Component
        ├── App
            ├── page                # main page 
            ├── layout              
        ├── features
            ├── matrix                
              ├── hooks                  # hooks specific to this matrix's feature 
                ├── useMatrix            # hooks to manage matrix
              ├── components             # components specific to this matrix's feature
                ├── SquareGrid           # component
              ├── constants               # constants specific to this matrix's 
                ├── matrixSizes           
              ├── utils                   # utils specific to this matrix's 
                ├── fillMatrix           
        
        ├── scss
            ├── abstracts               # to variables
            ├── base                    # base and  reset
        ├── store
            ├── slices                  # to plan and  user
    └── README.md                   # README

## Run

En caso de querer clonar el repositorio y probar localmente, haz lo siguiente:

1. Clone el repositorio.
2. Ejecutar:

```bash
npm install
```

3. Ejecutar

```bash
npm run dev
```

4. Abril el navegador en [http://localhost:3000](http://localhost:3000)

## Contacto
* Linkedin: [carlos yaco](https://www.linkedin.com/in/carlos-yaco-tincusi/)
* website: [web](https://carlosyaco.com)

##  Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).
