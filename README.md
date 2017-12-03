# Jimmy
React for Jimmy

### Good Resources
- [React Router (`react-router-dom`)](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
- [React Router Docs](https://knowbody.github.io/react-router-docs/api/Link.html)
- [React Training](https://reacttraining.com/react-router/web/example/auth-workflow)
- [Responsive React](https://medium.com/@mustwin/responsive-react-9b56d63c4edc)
    > "Now, in the React World, we don’t have pure css, we have CSS-in-JS. What this means is that either you adopt a hybrid approach using a global css specific to your project (which will stop you from reusing your components in other projects) or you start adding styles to each one of your Components in their JSX templates. The article below goes over the tradeoffs each approach has."

### Project Reflections

---
**Day 001:** 
This ended up being more of a review on CSS and HTML. Changing my attitude to just making it work with the tools I have chosen, I just wanted to work with the tools. I have noticed React was not a necessary/best choice for this project, in fact it is overkill and actually not optimal since I am just making a static site with anchors, and at most one view change.
React dom uses css file imports, versus native where it had a StyleSheet object. Doing this really takes the style out of code since no longer `style={{color:'blue'}}`. Not used to doing things this way... article linked above for Responsive React covers this.

### Rabbitholes
- [Mixins Harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html) --- "In object-oriented programming languages, a Mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes."
    > "It is not always obvious how a certain pattern can be solved with composition. React is influenced by functional programming but it came into the field that was dominated by object-oriented libraries. It was hard for engineers both inside and outside of Facebook to give up on the patterns they were used to."