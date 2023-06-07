# Buenas prácticas en el proyecto

En este proyecto, seguimos algunas buenas prácticas que nos ayudan a mantener un flujo de trabajo eficiente y una colaboración efectiva. A continuación, se presentan las prácticas que debemos tener en cuenta:

## Pull Requests y ramas de características (feature branches)

...

## Commits y ramas

-   Realizamos commits pequeños y específicos, abordando una tarea a la vez en commits separados.
-   Si se deben realizar cambios en varias secciones, consideramos hacerlos en diferentes PR para mantener un enfoque claro y un historial de cambios ordenado.
-   Se recomienda elegir explícitamente los archivos que se incluirán en un commit y mantener mensajes informativos y claros en los commits.
-   Mantenemos un formato común en el grupo para los mensajes de commit, utilizando una estructura que describa el área modificada y el tipo de cambio realizado.

### Ejemplos de nombres de commits:

-   `feat(api/players route): add endpoint GET /players/:id`
-   `refactor(client/dashboard): date logic for product expirations`
-   `fix(api/users controller): return 404 on inexistent user`
-   `test(api/math): add missing tests for division by zero`

Recomendamos mantener el mensaje de commit generado automáticamente en los merges y no modificarlo.

### Ejemplos de nombres de ramas:

-   `feat/user_creation`
-   `fix/currency_with_decimal`
-   `chore/lint_ci`
-   `refactor/auth_routing`

Los nombres de ramas deben ser informativos y proporcionar detalles sobre la sección en la que se trabaja y el tipo de branch.

...

Recuerda que estas buenas prácticas nos ayudan a mantener un flujo de trabajo ordenado y a facilitar la colaboración en el proyecto. Si tienes alguna pregunta o necesitas más información, no dudes en consultar con el equipo.

¡Gracias por tu colaboración!
