# Lesson Notes

## Few Decorators to remember

### For Directives

```ts
1. @Directive ({selector : "[directiveName]"})

2. @HostBinding("style.backgroundColor") : `To bind a certain property of an element`
    2.1. OR use Renderer2 (formerly Rendererv2), the second parameter passed to the constructor

3. @HostListener('click'|'mouseover'|'mouseexit') {}: `Listen for an event and react to it.`
```

### For structural directive

```
\*ngIf
```

- Uses `<ng-template/>` under the hood to conditionally display content. Uses `[ngIf]` without the star

```ts
@Input set directiveName(condition:boolean) {
    if(){
        this.vcRef.createEmbeddedView(this.templateRef)
    }
    else{
        this.vcRef.clear()
    }

    constructor (private templateRef :TemplateRef<any>,private vcRef:ViewContainerRef){}
}
```

`vcRef` needs to be imported and used to add the template to the DOM

---

# [ngSwitch]

## \*ngSwitchCase - \*ngSwitchDefault

- This might be better in case there are lots of ngIfs

---

# [(ngModel)]

## Something to remember

- ngModel will not work inside tags ! ~ Unless `name` attribute is specified

# Services & Dependency Injector ( Hierarchical Injector )

```ts
import {LogService}  from "./log.service.ts"
@Component({
    // ...
    providers: [LogService],
})
// ...
constructor (private logService:LogService) {}

```

### The `inject` method

```ts
import {LogService}  from "./log.service.ts"
@Component({
    // ...
})
// ...
private logService:LogService
constructor () {
    this.logService =  inject(LogService)
}
```

## Creating a data service

- The same instance of the service is shared with all the components down in the hierarchial tree
- Only define once in provider, in the top-most
- In order to share data, set emitter in the service ,invoke a function containg the emit in the service from the source component, and subscribe in the target component.
