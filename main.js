
    // ## Array Cardio Day 2

    const people = [
      {name: 'Wes', year: 1988 },
      {name: 'Kait', year: 1986 },
      {name: 'Irv', year: 1970 },
      {name: 'Lux', year: 2015 }
  ];
  
  const comments = [
      {text: 'Love this!', id: 523423 },
      {text: 'Super good', id: 823423 },
      {text: 'You are the best', id: 2039842 },
      {text: 'Ramen is my fav food ever', id: 123523 },
      {text: 'Nice Nice Nice!', id: 542328 }
    ];
    console.table(people);
    console.table(comments);
    
const date = new Date();
const year = date.getFullYear();
  // Some and Every Checks
  // Array.prototype.some()  
  console.log("is at least one person 19 or older?")

        function anyoneAtleast(age){
            const ans = people.some(person => { return ((year - person.year) >= age) })
            if (ans){
                console.log("yes")
                }else{console.log("no")}
                return ans;
            }
            
        anyoneAtleast(19);
  // Array.prototype.every() // 
  console.log('is everyone 19 or older?')
            function everyoneAtleast(yearsOld){
                const ans = people.every((person) => (year - person.year) >= yearsOld)
                if (ans){
                    console.log("yes")
                } else { console.log("no") }
                return ans;
            }
        everyoneAtleast(19);


  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  console.log("find the comment with the ID of 823423")
            function findCommentByID(idNumber){
                const comment = comments.find((person)=>person.id==idNumber)
                console.log(`ID# ${comment.id} commented "${comment.text}"`)
                return comment;
            }
            findCommentByID(823423)


  // Array.prototype.findIndex()
  console.log("Find the comment with this ID 823423")

            function findIndexOfCommentByID(enterID){
                const index = comments.findIndex((element)=>{
                    return element.id == enterID
                });
                console.log(`the index # is ${index}`)
                return index;
                }

    findIndexOfCommentByID(542328)
           
  
  console.log("delete the comment with the ID of 823423");

                function deleteIndexByID(id){
                    comments.splice(findIndexOfCommentByID(id), 1)
                    console.log(comments)
                };
                deleteIndexByID(823423); 

