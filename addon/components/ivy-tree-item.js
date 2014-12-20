import Ember from 'ember';

/**
 * @module ivy-tree-item
 */

/**
 * @class IvyTreeItemComponent
 * @namespace IvyTree
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  attributeBindings: ['aria-expanded', 'role', 'tabIndex'],
  classNames: ['ivy-tree-item'],
  isExpanded: true,
  isExpandable: false,
  tagName: 'li',

  init: function() {
    this._super();
    this._initTreeGroups();
  },

  'aria-expanded': Ember.computed(function() {
    if (!this.get("isExpandable")) {
      return;
    }

    return this.get("isExpanded") + ''; // coerce to 'true' or 'false'
  }).property("isExpanded", "isExpandable"),

  /**
   * Adds a group to the `treeGroups` array.
   *
   * @method registerTreeGroup
   * @param {IvyTree.IvyTreeGroupComponent} treeGroup
   */
  registerTreeGroup: function(treeGroup) {
    this.get("treeGroups").pushObject(treeGroup);
    this.set("isExpandable", true);
  },

  role: 'treeitem',

  tabIndex: '-1',

  toggleIsExpanded: Ember.on('doubleClick', function(e) {
    this.toggleProperty("isExpanded");
    e.stopPropagation();
  }),

  /**
   * Removes a group from the `treeGroups` array.
   *
   * @method unregisterTreeGroup
   * @param {IvyTree.IvyTreeGroupComponent} treeGroup
   */
  unregisterTreeGroup: function(treeGroup) {
    var treeGroups = this.get("treeGroups");

    treeGroups.removeObject(treeGroup);

    if (Ember.isEmpty(treeGroups)) {
      this.set("isExpandable", false);
    }
  },

  _initTreeGroups: function() {
    this.set("treeGroups", Ember.A());
  }
});