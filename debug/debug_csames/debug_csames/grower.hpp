#include "visitor.hpp"

#ifndef GROWER_H
#define GROWER_H

class Grower : public Visitor  {
  public:
    void visitTree(Tree* tree);
};

#endif /* Grower.h */
