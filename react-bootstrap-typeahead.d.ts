

declare module 'react-bootstrap-typeahead' {
    import { Component, ClassAttributes } from 'react';

    // Custom made typings based on exampes: https://github.com/ericgio/react-bootstrap-typeahead
    // Extended based on documentation at :https://github.com/ericgio/react-bootstrap-typeahead/blob/master/docs/Props.md

    export interface DataItem {
        id?: number | string;
        name?: string;
        label?: string;
        value?: string;
    }

    //HTMLProps<Typeahead>
    // can't extend HTMLProps, because of the "selected" property
    export interface ReactBootstrapTypeaheadProps extends ClassAttributes<Typeahead>  {
        align?: "justify"|"left"|"right";
        allowNew?: boolean;
        bsSize?:"large"|"lg"|"small"|"sm";
        caseSenstive?:boolean;
        defaultSelected?: any[];
        disabled?:boolean; // defined on React.HtmlProps
        dropup?: boolean;
        emptyLabel?: string;
        // filtering
        filterBy?: string[] | Function;//(item:any) => boolean;

        // rendering
        labelKey?: string | ((item:DataItem) => string);

        maxHeight?: number;
        maxResults?: number;
        minLength?: number;

        multiple?: boolean;
        //name // default

        //Provides the ability to specify a prefix before the user-entered text to indicate that the selection will be new. No-op unless allowNew={true}.
        newSelectionPrefix?: string;
        onBlur?():any;   // defaults
        onChange?():any; // defaults
        onFocus?():any;  // defaults
        onInputChange?: (textvalue:string) => any;

        options: string[] | DataItem[] | any[];

        paginate?:boolean;

        /*DEPRECATED: use maxResults and paginate instead */
        paginateResults?: number;
        paginationText?: string;
        placeholder?: string;
        renderMenuItemChildren?: (props: ReactBootstrapTypeaheadProps, item: any, index: number) => void;
        renderToken?: Function;

        // problem with selected is it overrides props on HTMLProps, where selected is a boolean
        selected?: any[];        
    }

    export class Typeahead extends Component<ReactBootstrapTypeaheadProps, any> {}
    export class AsyncTypeahead extends Component<ReactBootstrapTypeaheadProps, any> { }
    export class Menu extends Component<ReactBootstrapTypeaheadProps, any> { }
    export class MenuItem extends Component<ReactBootstrapTypeaheadProps, any> { }
    export class Token extends Component<ReactBootstrapTypeaheadProps, any> { }
    export function asyncContainer(typeAhead: Typeahead);
    export class menuItemContainer extends Component<ReactBootstrapTypeaheadProps, any> { }
    export class tokenContainer extends Component<ReactBootstrapTypeaheadProps, any> { }

}