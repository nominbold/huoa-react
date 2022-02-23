
1. add new folder to /pages
2. copy .js and .css files from other template
3. just keep the parts for the title and body
4. in the wordpress backend, goto Pages, add new page. remember the slug name you put. (don;t use space). Publish page.
5. in the backend goto Custom Fields, add New, Add Field , field type: group. Add fields for title and body. Scroll down to Location, set  rules: if Page is Equal to (page name). Publish.
6. Note the field label, this is what you replace in ~line 11 where it says `const { title, body } = data.testnewpage_page;`. put the field label there where it says `testnewpage_page`
7. goto file src/config/routes.js
8. `import TestNewPage from 'pages/TestNewPage/TestNewPage';`
9. add new Route . the path is the slug you made earlier.
10. done... maybe
```
<Route exact path="/testnewpage">
    <Header props={ pageState.testnewpage}/>
    <TestNewPage data={ pageState.testnewpage } />
 </Route>
```