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

- Uses <ng-template/> under the hood to conditionally display content. Uses `[ngIf]` without the star

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

### \*ngSwitchCase - \*ngSwitchDefault

- This might be better in case there are lots of ngIfs

---
