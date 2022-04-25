#!/usr/bin/env bash

echo ---------------------------------------------------------
echo "Step 1: addIdea"
echo ---------------------------------------------------------

IDEAID=$(near call $CONTRACT addIdea '{"idea": "Project_Control1"}' --account_id $NEAR_ACCOUNT | tail -c 8 | sed "s/'//")

echo $IDEAID
echo
echo ---------------------------------------------------------
echo "Step 2: Donate"
echo ---------------------------------------------------------
echo
argument="'{\"idea\":\"${IDEAID}\"}'"
echo $argument
near call $CONTRACT donation $argument --account_id $NEAR_ACCOUNT --amount 1 

echo ---------------------------------------------------------
echo "Step 3: Returns added a idea via id parameter."
echo ---------------------------------------------------------
argument1="'{\"id\":\"${IDEAID}\"}'"
near view $CONTRACT getIdea $argument1

echo ---------------------------------------------------------
echo "Step 4: Returns all ideas that addedto blockchain."
echo ---------------------------------------------------------

near view $CONTRACT getIdeas 
exit 0
