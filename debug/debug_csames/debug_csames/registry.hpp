#include "tree.hpp"
#include <iostream>

#ifndef REGISTRY_H
#define REGISTRY_H

class Registry {
    public:
        Tree** getList();
        void orderList();
        void addTree(Tree* tree);
        Registry();
        Tree* next();

    private:
        Tree** _trees;
        int _nTrees;
        int _mTrees;
        int _current;
};

#endif /* Registry.h */
