'use strict';

interface Utils {
  createLabelText: (label: string) => string;
  getLabelNames: (obj: Record<string, any>) => string[];
}

const Utils: Utils = {
  createLabelText: function(label: string) {
    return label.replace(/_/g, ' ');
  },

  getLabelNames: function(obj: Record<string, any>) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return Object.keys(obj[key]).sort();
      }
    }
    return [];
  }
};

export default Utils;

