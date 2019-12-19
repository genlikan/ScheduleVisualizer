Activity = function(Day, Activity_Description, Duration, Start_Act, End_Act, Color) {

  // this.currentHeight = 0;
  this.currentCube = 0;

  this.act_desc = Activity_Description;
  this.cubeSize = Duration;

  var MinInDay = 1440;

  if ((Start_Act && End_Act) != null){
    this.max_height = MinInDay - Start_Act;
    this.min_height = MinInDay - End_Act;
    // console.log("this.max_height: " + this.max_height);
    // console.log("this.min_height: " + this.min_height);
  }
  else {
    this.min_height = 0;
  }

  // if (this.currentHeight >= 1440) {
  //     return console.log('Limit Reached');
  // };

  var cubeGeo = new THREE.BoxBufferGeometry(120, this.cubeSize, 120);
  var cubeMat = new THREE.MeshPhongMaterial({color: '#FF0000'});
  var mesh = new THREE.Mesh(cubeGeo, cubeMat);


  console.log("this.max_height is: " + this.max_height);

  console.log("this.min_height is: " + this.min_height);

  // this.offset = 31;
  this.offset = this.cubeSize/2;

  // this.starting_height = this.offset + this.currentHeight + this.min_height;
  this.starting_height = this.offset + this.min_height;

  console.log("this.cubeSize/2 + this.min_height : " + this.starting_height);

  mesh.position.set(Day, this.starting_height , 0);

  ///////////
  // COLOR //
  ///////////

  if (Color == null){
    console.log(Color);
    cubeMat.color.setHex('0x'+Math.floor(Math.random()*16777215).toString(16));
  }

  else {
    cubeMat.color.setHex(Color.replace('#', '0x'));
  }

  //////////////////////////
  // ACTIVITY_DESCRIPTION //
  //////////////////////////

  if (Activity_Description == null){
    mesh.userData.tooltipText = "Default";
  }

  else {
    mesh.userData.tooltipText = Activity_Description;
  }

  console.log("What is the mesh.userData.tooltipText?: " + mesh.userData.tooltipText);

  this.currentMesh = mesh;

  scene.add(mesh);

  // if (this.currentHeight == null){
  //   this.currentHeight += 60;
  // }

  // else {
  //   this.currentHeight += Duration;
  // };
  
  // this.currentCube += 1;

  console.log("Current Cube Height:" + this.currentHeight);
  console.log("Current Cube Count:" + this.currentCube);

};

  // create head, neck, and, torso
  // var fromhelper = HELPER.cylinderSkeletonMesh(3, 5, 'blue')
  // var geometry = fromhelper[0];
  // var material = fromhelper[1];
  // var bones = fromhelper[2];

  // var mesh = new THREE.SkinnedMesh( geometry, material );
  // var skeleton = new THREE.Skeleton( bones );
  // mesh.add( bones[ 0 ] );
  // mesh.bind( skeleton );

  // this.root = bones[ 0 ];
  // this.root.position.set(x, y, z);

  // this.head = bones[ 1 ];
  // this.neck = bones[ 2 ];
  // this.neck.position.y = -10;
  // this.torso = bones[ 3 ];
  // this.torso.position.y = -30;
  // this.body_mesh = mesh;
  // this.movement = null;
