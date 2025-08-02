+++
title = "The importance of following a style guide"
date = "2013-05-10"

[taxonomies]
tags = ["memory", "spanish"]
+++

Back in 2013, when I was working in my own company **Cuble**, we decided that it could
be a good idea to wrote some posts about good practices and development. This is other
post I was able to recovery thanks to [Wayback Machine](https://web.archive.org/).

This is the original post.

> "Cualquiera puede escribir código que un ordenador entiende. Los buenos programadores escriben código que los humanos pueden entender"
>
> **Martin Fowler**
>
> La importancia de trabajar apoyados en una guía de estilo. El código se lee más veces de las que se escribe. A veces se puede caer en la tentación de escribir el código que simplemente funcione, sin pararnos a pensar en su legibilidad o de cuanto le costaría a alguien entenderlo sólo leyendo lo que hemos escrito. Empiezas un proyecto nuevo,  y entre función y función, clase y clase, vas cambiando de estilo y entre lo que estás escribiendo ahora mismo y lo primero que empezaste a escribir deja la sensación de que ha estado escribiendo en tu código más de una persona. O puede que tomes el proyecto que haya empezado otra persona, que no lo ha podido terminar, ves como está escrito, no te gusta su estilo y decides aplicar tu toque personal.
>
> Con el paso del tiempo te das cuenta del error que cometiste no siguiendo una guía de estilo clara. Cuando tienes que corregir un bug que aparece en las primeras líneas de código que escribiste. O cuando tienes que entender un fragmento de código escrito por otras personas donde cada variable sigue un estilo distinto para ponerle nombre y una indentación que hace imposible saber a primera vista donde termina un bloque y empieza otro.
>
> **Precisamente, para evitar estos momentos de frustración nos gustaría dar algunas recomendaciones.**
>
> ## Python
>
> Si trabajas con Python, es indispensable seguir el famoso [PEP 8](http://www.python.org/dev/peps/pep-0008/), la guía de estilo que se siguen las librerías estándar de Python. Además de tener siempre en mente el Zen de Python:
>
> ```
> Python 2.7.3 (default, Sep 26 2012, 21:51:14)
> [GCC 4.7.2] on linux2
> Type "help", "copyright", "credits" or "license" for more information.
> >>> import this
> The Zen of Python, by Tim Peters
> Beautiful is better than ugly.
> Explicit is better than implicit.
> Simple is better than complex.
> Complex is better than complicated.
> Flat is better than nested.
> Sparse is better than dense.
> Readability counts.
> Special cases aren't special enough to break the rules.
> Although practicality beats purity.
> Errors should never pass silently.
> Unless explicitly silenced.
> In the face of ambiguity, refuse the temptation to guess.
> There should be one-- and preferably only one --obvious way to do it.
> Although that way may not be obvious at first unless you're Dutch.
> Now is better than never.
> Although never is often better than *right* now.
> If the implementation is hard to explain, it's a bad idea.
> If the implementation is easy to explain, it may be a good idea.
> Namespaces are one honking great idea -- let's do more of those!
> >>>
> ```
>
> Si trabajas con Django, también es interesante echarle un ojo a su guía de estilo, que se complementa perfectamente con el PEP 8.
>
> ## PHP
>
> Si trabajas con PHP unas guías de estilo muy recomendables para seguir son los propuestos por el Framework Interop Group, y que puedes ver en estos repositorios de GitHub:
>
>  * PSR-0
>  * PSR-1
>  * PSR-2
>  * PSR-3
>
> Estos documentos son inclusivos, por lo que si decides seguir el PSR-1, también deberías de cumplir el PSR-0, si decides seguir el PS2 tienes que cumplir también el PSR-1 y el PSR-0, y así sucesivamente.
>
> ## Conclusión
>
> Si empiezas un nuevos proyecto, ya sea para ti sólo o en un equipo, empieza siempre siguiendo unas guías de estilo, lo agradecerás. Lee código, es uno de los mejores consejos que puede recibir alguien para mejorar como programador, ver como escriben grandes profesionales de la industria, y que gracias al Open Source no tienes excusa para cumplir.  Y recuerda que al final, lo más importante es mantener la coherencia entre todo el código del proyecto. Si tienes que continuar un proyecto que está ya empezado, sigue las convenciones que se utilicen en éste, aunque no sean las que hubieras escogido, ya que la legibilidad siempre debe prevalecer.

In the end, we had to close the company. Is was a hard time for me, but, there are a
lot of lessons learning you can get from the failure, and that was the case.
