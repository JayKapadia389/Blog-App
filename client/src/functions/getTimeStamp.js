function getTimeStamp(d){

        let date = new Date(d) ;

        let today = new Date() ;

        let msDifference =  today.getTime() - date.getTime()  ;

        let daysDifference = Math.floor(msDifference / (1000 * 60 * 60 * 24));

        if(daysDifference > 365){

            if(Math.floor(daysDifference/365) == 1){
                return Math.floor(daysDifference/365) + " year ago" ;
            }
            return Math.floor(daysDifference/365) + " years ago" ;
        }

        else if(daysDifference > 30){

            if(Math.floor(daysDifference/30) == 1){
                return Math.floor(daysDifference/30) + " month ago" ;
            }
            return Math.floor(daysDifference/30) + " months ago" ;
        }

        else if(daysDifference > 6){
            if(Math.floor(daysDifference/7) == 1){
                return Math.floor(daysDifference/7) + " week ago" ;
            }
            return Math.floor(daysDifference/7) + " weeks ago" ;
        }

        else if(daysDifference >= 1 && daysDifference <= 6){
            if(Math.floor(daysDifference) == 1){
                return Math.floor(daysDifference) + " day ago" ;
            }
            return Math.floor(daysDifference) + " days ago" ;
        }

        else if(Math.floor(msDifference / (1000 * 60 * 60)) > 0){
            if(Math.floor(msDifference / (1000 * 60 * 60)) == 1){
                return Math.floor(msDifference / (1000 * 60 * 60)) + " hour ago" ;
            }
            return Math.floor(msDifference / (1000 * 60 * 60)) + " hours ago" ;
        }

        else if(Math.floor(msDifference / (1000 * 60)) > 0){

            if(Math.floor(msDifference / (1000 * 60)) == 1){
                return Math.floor(msDifference / (1000 * 60)) + " minute ago" ;
            }
            return Math.floor(msDifference / (1000 * 60)) + " minutes ago";
        }

        else{
            return Math.floor(msDifference / (1000)) + " seconds ago";
        }
        }

export default getTimeStamp ;
