# Angular Basics

## Data Binding
Data binding in Angular allows communication between the component and the DOM. It includes:
- **Interpolation**: `{{ value }}`
- **Property Binding**: `[property]="value"`
- **Event Binding**: `(event)="handler()"`
- **Two-way Binding**: `[(ngModel)]="value"`

## Lifecycle Hooks
Angular provides lifecycle hooks that help manage component behavior:
- `ngOnInit()`: Runs after component initialization.
- `ngOnChanges()`: Detects input property changes.
- `ngDoCheck()`: Custom change detection.
- `ngAfterViewInit()`: Runs after view initialization.
- `ngOnDestroy()`: Cleanup before component destruction.

## Forms
Angular supports two types of forms:
- **Template-driven forms**: Uses `ngModel` for binding.
- **Reactive forms**: Uses `FormGroup` and `FormControl` for dynamic form handling.

## Decorators
Decorators are functions that modify classes and properties in Angular:
- `@Component`: Defines a component.
- `@Directive`: Creates a custom directive.
- `@Injectable`: Marks a class as a service for dependency injection.
- `@Input`: Passes data from parent to child component.
- `@Output`: Emits events to send data from child to parent component.

## Conclusion
Understanding these fundamental Angular concepts is crucial for building efficient and maintainable applications. Explore these topics in-depth to strengthen your Angular knowledge!


## Projects Setup

- Download and unzip repository.
- `npm install` to install packages in each project folders
- `ng s` to run the project

