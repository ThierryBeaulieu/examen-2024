#include "swing.hpp"

#ifndef BRANCH_H
#define BRANCH_H

class Branch {
    public:
        int getLength();
        void setSwing(Swing swing);
        Swing* getSwing();
        int getId();
        Branch(int id=0, int length=2);
        ~Branch();
    private:
        Swing* mySwing = nullptr;
        int _id;
        int _length;
public:
        void grow();
};

#endif /* Branch.h */
