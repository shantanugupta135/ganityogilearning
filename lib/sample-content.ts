export const sampleChapterContent = {
  'class9-math-3': {
    title: 'Coordinate Geometry - Use of Coordinates',
    content: `
    <div class="space-y-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Chapter 3: Coordinate Geometry</h2>
        <h3 class="text-xl font-semibold text-gray-800 mb-3">3.1 Introduction to Cartesian Coordinate System</h3>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          The Cartesian coordinate system, also known as the rectangular coordinate system, is a way to locate points in a plane using two perpendicular number lines called axes. The horizontal line is called the x-axis and the vertical line is called the y-axis. The point where these two lines intersect is called the origin, denoted by O, and has coordinates (0, 0).
        </p>

        <p class="text-gray-700 leading-relaxed mb-4">
          Each point in the plane can be uniquely identified by an ordered pair of numbers (x, y), called the coordinates of the point. The first number x is called the x-coordinate or abscissa, and the second number y is called the y-coordinate or ordinate.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
          <p class="text-sm text-gray-700"><strong>Key Terms:</strong></p>
          <ul class="text-sm text-gray-700 list-disc ml-5 mt-2">
            <li>Origin (O): The point where x-axis and y-axis meet (0, 0)</li>
            <li>Abscissa: The x-coordinate of a point</li>
            <li>Ordinate: The y-coordinate of a point</li>
            <li>Quadrants: The four regions of the coordinate plane</li>
          </ul>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3 mt-6">3.2 Plotting Points on the Coordinate Plane</h3>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          To plot a point with coordinates (x, y):
        </p>

        <ol class="list-decimal ml-5 text-gray-700 space-y-2 mb-4">
          <li>Start from the origin O (0, 0)</li>
          <li>Move x units along the x-axis (right if x is positive, left if x is negative)</li>
          <li>From that point, move y units parallel to the y-axis (up if y is positive, down if y is negative)</li>
          <li>Mark the point where you end up</li>
        </ol>

        <div class="bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">Example:</p>
          <p class="text-sm text-gray-700 mb-2">Plot the point A(3, 2)</p>
          <ul class="text-sm text-gray-700 list-disc ml-5">
            <li>Start at origin O(0, 0)</li>
            <li>Move 3 units right along the x-axis</li>
            <li>Move 2 units up parallel to the y-axis</li>
            <li>Mark point A at (3, 2)</li>
          </ul>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3 mt-6">3.3 Distance Formula</h3>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          The distance between two points P(x₁, y₁) and Q(x₂, y₂) is given by:
        </p>

        <div class="bg-gray-100 p-4 rounded mb-4 text-center">
          <p class="text-lg font-mono text-gray-900">d = √[(x₂ - x₁)² + (y₂ - y₁)²]</p>
        </div>

        <p class="text-gray-700 leading-relaxed mb-4">
          This formula is derived from the Pythagorean theorem. If we have two points P and Q, and we draw perpendiculars to the axes, we form a right triangle where the distance PQ is the hypotenuse.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">Example:</p>
          <p class="text-sm text-gray-700 mb-2">Find the distance between P(1, 2) and Q(4, 6)</p>
          <p class="text-sm text-gray-700 font-mono mb-2">d = √[(4-1)² + (6-2)²]</p>
          <p class="text-sm text-gray-700 font-mono mb-2">d = √[9 + 16]</p>
          <p class="text-sm text-gray-700 font-mono">d = √25 = 5 units</p>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3 mt-6">3.4 Section Formula</h3>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          If a point P divides the line segment joining points A(x₁, y₁) and B(x₂, y₂) in the ratio m:n (internally), then the coordinates of P are:
        </p>

        <div class="bg-gray-100 p-4 rounded mb-4 text-center">
          <p class="text-lg font-mono text-gray-900">P(x, y) = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))</p>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">Example:</p>
          <p class="text-sm text-gray-700 mb-2">Find the coordinates of point P that divides the line segment joining A(2, 3) and B(8, 9) in the ratio 1:2</p>
          <p class="text-sm text-gray-700 font-mono mb-2">P(x, y) = ((1×8 + 2×2)/(1+2), (1×9 + 2×3)/(1+2))</p>
          <p class="text-sm text-gray-700 font-mono mb-2">P(x, y) = ((8 + 4)/3, (9 + 6)/3)</p>
          <p class="text-sm text-gray-700 font-mono">P(x, y) = (4, 5)</p>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3 mt-6">Practice Problems</h3>
        
        <ol class="list-decimal ml-5 text-gray-700 space-y-3 mb-4">
          <li>Plot the following points on a graph:
            <ul class="list-disc ml-5 mt-1">
              <li>A(2, 3)</li>
              <li>B(-2, 4)</li>
              <li>C(-3, -2)</li>
              <li>D(4, -1)</li>
            </ul>
          </li>
          <li>Find the distance between:
            <ul class="list-disc ml-5 mt-1">
              <li>P(0, 0) and Q(3, 4)</li>
              <li>A(1, 1) and B(7, 9)</li>
            </ul>
          </li>
          <li>Find the point that divides the line segment joining (1, 7) and (4, -3) in the ratio 2:1</li>
        </ol>
      </div>
    </div>
    `
  }
}
