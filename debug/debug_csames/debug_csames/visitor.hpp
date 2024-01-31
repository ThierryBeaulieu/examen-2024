#include "tree.hpp"

#ifndef VISITOR_H
#define VISITOR_H

class Visitor {
    public:
        virtual void visitTree(Tree* tree) = 0;
};

#endif /* Visitor.y */
